import React, { useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, ImportFileContainer, Footer } from './styles';
import { Upload } from '../../Upload';
import api from '../../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

export const DeployProcess: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);

  const history = useHistory();

  const handleUpload = useCallback(async () => {
    const data = new FormData();
    const { file, name: filename } = uploadedFiles[0];
    const blob = new Blob([file], { type: 'text/xml' });
    data.append('file', blob, filename);
    await api.post('/v1/deployments', data);
    history.push('/');
  }, [history, uploadedFiles]);

  const submitFile = useCallback((files: File[]) => {
    const newFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: String(file.size),
    }));
    setUploadedFiles(newFiles);
  }, []);

  return (
    <>
      <Container>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && (
            <ul>
              {uploadedFiles.map(file => (
                <li key={file.name}>
                  <strong>{file.name}</strong>
                </li>
              ))}
            </ul>
          )}
          <Footer>
            <p>
              <FiAlertCircle size={20} />
              Permitido apenas arquivos bpm do camunda
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

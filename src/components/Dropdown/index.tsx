import React, { useState, createRef, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, Badge, ItemList } from './styles';

interface DropDownProps {
  icon: React.ComponentType<IconBaseProps>;
}

const Dropdown: React.FC<DropDownProps> = ({ children, icon: Icon }) => {
  const [open, setOpen] = useState<boolean>(false);
  const container = createRef<HTMLDivElement>();
  const handleButtonClick = useCallback(() => {
    setOpen(!open);
  }, [open]);
  const handleClickOutside = React.useCallback(
    (event: Event) => {
      if (
        container.current &&
        !container.current.contains(event.target as HTMLElement)
      ) {
        setOpen(false);
      }
    },
    [container],
  );
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <Container ref={container}>
      <Badge type="button" className="badge" onClick={handleButtonClick}>
        <Icon size={20} />
      </Badge>
      <ItemList open={open}>{children}</ItemList>
    </Container>
  );
};

export default Dropdown;

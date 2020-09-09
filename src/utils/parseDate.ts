import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function parseDate(date: Date | string): string {
  return format(new Date(date), "dd/MM/yyyy 'às 'HH:mm'h'", {
    locale: ptBR,
  });
}

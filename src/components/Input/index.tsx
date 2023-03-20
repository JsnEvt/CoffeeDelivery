import { forwardRef, InputHTMLAttributes } from 'react';
import { RegularText } from '../Typography';
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
}

//para resolver a questao do erro com o 'Refs' quando se sua o hook form para envio de formularios.

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size='s'>{error}</RegularText>}
      </InputWrapper>
    )
  }
)
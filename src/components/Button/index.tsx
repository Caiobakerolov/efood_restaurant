import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'default' | 'fullWidth'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'default'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <>
      <ButtonLink to={to as string} title={title} variant={variant}>
        {children}
      </ButtonLink>
    </>
  )
}

export default Button

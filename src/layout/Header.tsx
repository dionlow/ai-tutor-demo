// TODO: delete or refactor
type HeaderProps = {
  children: React.ReactNode;
}

export const HeaderRightAligned: React.FC<HeaderProps> = ({ children }) => (
  <header className='header'>{children}</header>
)

export const HeaderCenterAligned: React.FC<HeaderProps> = ({ children }) => (
  <header className='header'>{children}</header>
)


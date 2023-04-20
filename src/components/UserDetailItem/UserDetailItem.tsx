import './UserDetailItem.scss'

interface UserDetailItemProps {
    title: string;
  info: string;
  id?: string;
}

const UserDetailItem = (userItem: UserDetailItemProps) => {
  const { title, info, id } = userItem;

  // const handleCopy = () => {
  //   const textToCopy = document.getElementById(id).textContent.trim();
  //   navigator.clipboard.writeText(textToCopy).then(() => {
  //     console.log('Text copied to clipboard');
  //   }, (error) => {
  //     console.error('Error copying text: ', error);
  //   });
    
  return (
        <div className="col-md-3 col-sm-4 col-xs-6">
          <div className="user-section-info-sub-section-title">{ title}</div>
      <div className="user-section-info" id={id}>{info === "undefined" ? "N/A" : info}</div>
        </div>
  )
}

export default UserDetailItem
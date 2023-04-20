import "./Card.scss"

interface CardProps {
    icon: string,
    title: string,
    amount: string
}

const Card = (cardItem: CardProps) => {
    const { icon, title, amount } = cardItem;
  return (
  <div className="col-lg-3 col-md-6 col-12">
    <div className="card userCard">
      <div className="card-body px-0">
                    <img src={icon} alt="" className="userCardImage" />
                  <p className="card-text">{title}</p>
              <div className="userCardAmount">{amount}</div>

      </div>
    </div>
  </div>
  )
}

export default Card
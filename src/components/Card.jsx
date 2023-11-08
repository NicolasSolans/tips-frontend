export const Card = ({p}) => {
    const {name, code, price, image, alt} = p

  return (
    <div className="card card-side bg-base-100 ">
  <figure><img className="border-solid border-2 border-slate-200 w-56 cursor-pointer" src={image} alt={alt}/></figure>
  <div className="card-body bg-slate-50">
    <h2 className="card-title">{name}</h2>
    <p>Código: {code}</p>
    <p>Precio: <strong>{price}</strong></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">COMPRAR</button>
    </div>
  </div>
    </div>  
  )
}

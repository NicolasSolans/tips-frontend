import { Card } from "./Card"

const CardList = ({products}) => {
    const prodList = products

    return(
        <div className="grid grid-cols-2 gap-10 bg-slate-50"> 
            {
                prodList?.map(p=>
                    <Card p={p}/>)
            }
        </div>
    )
}

export default CardList
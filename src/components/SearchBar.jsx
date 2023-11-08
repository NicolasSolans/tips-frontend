export const SearchBar = (props) => {
    const {handleSubmit, handleChange} = props;
  return (
    <div className="flex justify-center bg-slate-50">
        <form onChange={(event) => handleChange(event)}>

        <label className="label">
        <input type="search" placeholder="Buscar productos" className="input input-bordered input-info w-full max-w-xs" />
        <button onClick={(event) => handleSubmit(event)} type="submit" className="btn btn-neutral">Buscar</button>
        </label>
        </form>
    </div>
  )
}

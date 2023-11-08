import { SearchIcon } from '@heroicons/react/solid';

export const SearchBar = (props) => {
    const {handleSubmit, handleChange} = props;
  return (
    <div className="flex justify-center bg-slate-50">
        <form onChange={(event) => handleChange(event)}>

        <label className="label">
        <input type="search" className="input input-bordered w-full max-w-xs" />
        <button onClick={(event) => handleSubmit(event)} type="submit" className="btn btn-active btn-neutral">
          <SearchIcon className="w-5 h-5 mr-2"/>  <span className='normal-case'>Buscar</span></button>
        </label>
        </form>
    </div>
  )
}

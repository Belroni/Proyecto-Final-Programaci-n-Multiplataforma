import useOrder from "../hooks/useOrder"

export default function Category({category}) {

  const { handleClickCategory, currentCategory } = useOrder();
  const {icon, id, name} = category

  return (
    <div className={`${currentCategory.id === id ? 'bg-amber-400' : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        
        <img
          alt="icon image"
          src={`/img/icono_${icon}.svg`}
          className="w-12"
        />

        <button
          className="text-lg font-bold cursor-pointer truncate"
          type="button"
          onClick={() => handleClickCategory(id)}
        >
          {name}
        </button>
    </div>
  )
}

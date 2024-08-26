interface CategoryProps{
    params: {
        categories:string[]
    },
    searchParams?: { 
        [key: string]: string 
    }
}

export default function Category(props: CategoryProps){
    
    const { categories } = props.params 
    const searchParams = props.searchParams;

    return(
        <header>
          <h2>Categorías:</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
       </ul>
          <ul>
            {Object.keys(searchParams || {}).map((key) => (
              <li key={key}>{key}: {searchParams?.[key]}</li>
            ))}
          </ul>
        </header>
    )
}
import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({genre, handleClickButton}:{genre: GenreResponseProps[]; handleClickButton: (genreId: number) => void}) {
  let selectedGenreId:number = 1;
  
  return(
    
    <>
      <nav className="sidebar">
          
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {genre.map(genre => (
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            ))}
          </div> 
        </nav>        
      </>
  )
}


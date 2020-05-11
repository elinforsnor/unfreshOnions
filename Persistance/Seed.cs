using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext context) 
        {
            if(!context.Movies.Any())
            {
                var movies = new List<Movie>
                {
                    new Movie {
                        Title = "Goosebumps",
                        Description = "A teenager teams up with the daughter of young adult horror author R.L. Stine after the writer's imaginary demons are set free on the town of Madison, Delaware.",
                        Length = 103,
                        Year = 2015,
                        Genre = "Action, Adventure, Comedy",
                        HasSeen = true,
                        IsFavourite = false
                    },
                     new Movie {
                        Title = "The Martian",
                        Description = "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
                        Length = 144,
                        Year = 2015,
                        Genre = "Adventure, Drama, Sci-Fi",
                        HasSeen = false,
                        IsFavourite = true
                    },
                     new Movie {
                        Title = "Bridge of Spies",
                        Description = "An American lawyer is recruited by the CIA during the Cold War to help rescue a pilot detained in the Soviet Union.",
                        Length = 141,
                        Year = 2015,
                        Genre = "Biography, Drama, History",
                        HasSeen = false,
                        IsFavourite = false
                    }
                };
                context.Movies.AddRange(movies);
                context.SaveChanges();
            }
        }
    }
}
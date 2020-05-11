using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Movies
{
	public class Edit
	{
		public class Command : IRequest
		{
			public Guid Id { get; set; }
			public string Title { get; set; }
			public string Description { get; set; }
			public int? Length { get; set; }
			public int? Year { get; set; }
			public string Genre { get; set; }
			public bool? HasSeen { get; set; }
			public bool? IsFavourite { get; set; }
		}
		public class Handler : IRequestHandler<Command>
		{
			private readonly DataContext _context;
			public Handler(DataContext context)
			{
				_context = context;
			}

			public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
			{
                var movie = await _context.Movies.FindAsync(request.Id);
                if (movie == null)
                    throw new Exception("Could not find movie");
                
                movie.Title = request.Title ?? movie.Title;
                movie.Description = request.Description ?? movie.Description;
                movie.Length = request.Length ?? movie.Length;
                movie.Year = request.Year ?? movie.Year;
                movie.Genre = request.Genre ?? movie.Genre;
                movie.HasSeen = request.HasSeen ?? movie.HasSeen;
                movie.IsFavourite = request.IsFavourite ?? movie.IsFavourite;

				var success = await _context.SaveChangesAsync() > 0;

				if (success)
					return Unit.Value;

				throw new System.Exception("Problem updating movie");
			}
		}
	}
}
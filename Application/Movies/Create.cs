using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Movies
{
	public class Create
	{
		public class Command : IRequest
		{
			public Guid Id { get; set; }
			public string Title { get; set; }
			public string Description { get; set; }
			public int Length { get; set; }
			public int Year { get; set; }
			public string Genre { get; set; }
			public bool HasSeen { get; set; }
			public bool IsFavourite { get; set; }
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
                var movie = new Movie
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    Length = request.Length,
                    Year = request.Year,
                    Genre = request.Genre,
                    HasSeen = request.HasSeen,
                    IsFavourite = request.IsFavourite
                };

                _context.Movies.Add(movie);
                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                    return Unit.Value;
                throw new Exception("Problem adding movie");
			}
		}
	}
}
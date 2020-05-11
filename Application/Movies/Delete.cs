using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Movies
{
	public class Delete
	{
		public class Command : IRequest
		{
            public Guid Id { get; set; }
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
                
                _context.Remove(movie);

                var success = await _context.SaveChangesAsync() > 0;
                if (success)
                    return Unit.Value;
                
                throw new Exception("Problem when deleting movie");

			}
		}
	}
}
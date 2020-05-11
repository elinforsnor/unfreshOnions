using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Movies;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MoviesController : ControllerBase
	{
		private readonly IMediator _mediator;
		public MoviesController(IMediator mediator)
		{
			_mediator = mediator;
		}

        [HttpGet]
        public async Task<ActionResult<List<Movie>>> List() 
        {
            // Sending to List Handler
            return await _mediator.Send(new List.Query());
        }
	}
}
using GEPriceTrace.Models;
using GEPriceTrace.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GEPriceTrace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeDBController : ControllerBase
    {
        IGEDBRepository _repository;
        public GeDBController(IGEDBRepository repository) 
        {
            _repository = repository;
        }

        [HttpGet("GetScapeItem")]
        public ScapeDBItem GetScapeItem(int itemId)
        {
            return _repository.GetDBItemDetails(itemId);
        }
    }
}

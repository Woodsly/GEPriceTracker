using GEPriceTrace.Models;
using GEPriceTrace.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GEPriceTrace.Controllers
{
    public class WikiController : ControllerBase
    {
        IWikiRepository _repository;
        public WikiController(IWikiRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("GetAllWikiItems")]
        public async Task<WikiItems> GetAllWikiItems()
        {
            return await _repository.GetAllWikiItems();
        }

        [HttpGet("GetWikiItemById")]
        public async Task<WikiItems> GetWikiItemById(int id)
        {
            return await _repository.GetWikiItemById(id);
        }
    }
}

using GEPriceTrace.Models;

namespace GEPriceTrace.Repositories
{
    public interface IWikiRepository
    {
        public Task<WikiItems> GetAllWikiItems();
        public Task<WikiItems> GetWikiItemById(int id);


    }
}

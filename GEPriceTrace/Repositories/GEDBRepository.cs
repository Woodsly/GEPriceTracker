using GEPriceTrace.Models;

namespace GEPriceTrace.Repositories
{
    public class GEDBRepository : IGEDBRepository
    {
        GedbContext _context;
        public GEDBRepository(GedbContext context)
        {
            _context = context;
        }
        public ScapeDBItem GetDBItemDetails(int itemId)
        {
            return _context.ScapeItems.FirstOrDefault(x => x.ItemId == itemId);
        }
    }
}

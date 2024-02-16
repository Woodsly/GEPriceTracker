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

        //code that seaarches for a scapedbitem by name
        public ScapeDBItem GetDBItemDetailsByName(string itemName)
        {
            return _context.ScapeItems.FirstOrDefault(x => x.Name == itemName);
        }
    }
}

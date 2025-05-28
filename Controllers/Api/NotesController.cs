using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SynapseBook.Data;
using SynapseBook.Models;
using SynapseBook.Services;


namespace SynapseBook.Controllers.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public NotesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllNotes()
        {
            var bookings = await _context.Notes.ToListAsync();
            return Ok(bookings);
        }


        [HttpGet("test")]
        public IActionResult TestDbConnection()
        {
            try
            {
                var canConnect = _context.Database.CanConnect();
                return Ok(new { success = canConnect });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }



        // GET: api/bookings/{id}
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetBookingById(int id)
        //{
        //    var booking = await _context.Bookings.FindAsync(id);
        //    if (booking == null)
        //        return NotFound();
        //    return Ok(booking);
        //}

        //// POST: api/bookings
        //[HttpPost]
        //public async Task<IActionResult> Post(Booking booking)
        //{
        //    _context.Bookings.Add(booking);
        //    await _context.SaveChangesAsync();
        //    return CreatedAtAction(nameof(GetAllBookings), new { id = booking.Id }, booking);
        //}

        //// PUT: api/bookings/{id}
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Put(int id, Booking updatedBooking)
        //{
        //    if (id != updatedBooking.Id)
        //        return BadRequest("ID mismatch");

        //    var existingBooking = await _context.Bookings.FindAsync(id);
        //    if (existingBooking == null)
        //        return NotFound();

        //    // Update fields
        //    existingBooking.UserName = updatedBooking.UserName;
        //    existingBooking.BookingDate = updatedBooking.BookingDate;
        //    existingBooking.Description = updatedBooking.Description;

        //    await _context.SaveChangesAsync();

        //    return NoContent(); // 204 success with no response body
        //}

        //// DELETE: api/bookings/{id}
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(int id)
        //{
        //    var booking = await _context.Bookings.FindAsync(id);
        //    if (booking == null)
        //        return NotFound();

        //    _context.Bookings.Remove(booking);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}
    }
}
//using BookingAPI;
//using BookingAPI.Data;
//using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using SynapseBook.Models;
using SynapseBook.Services;
using System.Diagnostics;

namespace SynapseBook.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly NotesService _notesService;

        public HomeController(ILogger<HomeController> logger, NotesService notesService)
        {
            _logger = logger;
            _notesService = notesService;
        }

        public async Task<IActionResult> Index()
        {
            var notes = await _notesService.GetAllNotesAsync();
            return View(notes); // send to Razor view
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

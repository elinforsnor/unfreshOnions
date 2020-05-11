using System;

namespace Domain
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Length  { get; set; }
        public int Year { get; set; }
        public string Genre { get; set; }
        public bool HasSeen { get; set; }
        public bool IsFavourite { get; set; }
    }
}
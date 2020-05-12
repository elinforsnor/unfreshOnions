using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Xml;
using Domain;

namespace Persistance
{
	public class Seed
	{
		public static void SeedData(DataContext context)
		{
			if (!context.Movies.Any())
			{
				XmlReader xmlFile;

				xmlFile = XmlReader.Create("/Users/elin/Desktop/Omegapoint/unfreshOnions/Persistance/movies.xml", new XmlReaderSettings());

				DataSet ds = new DataSet();

				ds.ReadXml(xmlFile);

				int i = 0;

				for (i = 0; i <= ds.Tables[0].Rows.Count - 1; i++)
				{
					var movies = new List<Movie>
				{
					new Movie {
						Title = ds.Tables[0].Rows[i].ItemArray[0].ToString(),
						Description = ds.Tables[0].Rows[i].ItemArray[1].ToString(),
						Length = Convert.ToInt32(ds.Tables[0].Rows[i].ItemArray[2]),
						Year = Convert.ToInt32(ds.Tables[0].Rows[i].ItemArray[3]),
						Genre = ds.Tables[0].Rows[i].ItemArray[4].ToString(),
						HasSeen = Convert.ToBoolean(ds.Tables[0].Rows[i].ItemArray[5].ToString()),
						IsFavourite = Convert.ToBoolean(ds.Tables[0].Rows[i].ItemArray[6].ToString())
					},
				};
					context.Movies.AddRange(movies);
					context.SaveChanges();
				};

			}
		}
	}
}
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
	def set_default_headers(self):
	    self.set_header('Access-Control-Allow-Origin', '*')

	def get(self):
		scale = self.get_query_argument("scale")
		if (scale == 'day'):
			self.write('{"points": [\
		    {"x": 5, "y": 1},\
            {"x": 6, "y": 2},\
            {"x": 6, "y": 3},\
            {"x": 5, "y": 6},\
            {"x": 4, "y": 7},\
            {"x": 5, "y": 8},\
            {"x": 6, "y": 8},\
            {"x": 8, "y": 9},\
            {"x": 9, "y": 9},\
            {"x": 7, "y": 8},\
            {"x": 9, "y": 8},\
            {"x": 6, "y": 7},\
            {"x": 7, "y": 6},\
            {"x": 9, "y": 6},\
            {"x": 11, "y": 5},\
            {"x": 12, "y": 3},\
            {"x": 12, "y": 2},\
            {"x": 13, "y": 3},\
            {"x": 12, "y": 1},\
            {"x": 7, "y": 1},\
            {"x": 8, "y": 2},\
            {"x": 9, "y": 2},\
            {"x": 8, "y": 3},\
            {"x": 6, "y": 1},\
            {"x": 5, "y": 1},\
            {"x": 5, "y": 7}\
		 	]}')
		elif (scale == 'month'):
			self.write('{"points": [\
				{"x": 2, "y": 12},\
	            {"x": 2, "y": 13},\
	            {"x": 3, "y": 13.5},\
	            {"x": 4, "y": 13.5},\
	            {"x": 5, "y": 13},\
	            {"x": 3, "y": 4},\
	            {"x": 8, "y": 4},\
	            {"x": 6, "y": 1},\
	            {"x": 3, "y": 1},\
	            {"x": 2, "y": 2},\
	            {"x": 2, "y": 4},\
	            {"x": 4, "y": 11},\
	            {"x": 4, "y": 12.5},\
	            {"x": 3.5, "y": 12.5},\
	            {"x": 2, "y": 11},\
	            {"x": 2, "y": 12},\
	            {"x": 3, "y": 12},\
	            {"x": 3, "y": 3},\
	            {"x": 4, "y": 2},\
	            {"x": 6, "y": 2}]}')
		elif (scale == 'year'):
			self.write('{"points": [\
				{"x": 2, "y": 1},\
	            {"x": 2, "y": 2},\
	            {"x": 2, "y": 3},\
	            {"x": 2, "y": 4},\
	            {"x": 3, "y": 3},\
	            {"x": 4, "y": 2},\
	            {"x": 5, "y": 4},\
	            {"x": 6, "y": 5},\
	            {"x": 7, "y": 4},\
	            {"x": 8, "y": 3},\
	            {"x": 9, "y": 7},\
	            {"x": 10, "y": 5}]}')
		else:
			self.set_status(400)
			self.finish("<html><body>400: Bad Request</body></html>")

def make_app():
	return tornado.web.Application([(r"/graphics", MainHandler),])

if __name__ == "__main__":
	app = make_app()
	app.listen(8888)
	tornado.ioloop.IOLoop.current().start()

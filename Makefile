run:
	docker run -p 5500:5500 -d --rm --name newmax newmaks/newmax-server
stop:
	docker stop newmax
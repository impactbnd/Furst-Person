HubSpot COS Upload Tool Setup

Installing on MacOSX

Open up Terminal
	Go to the folder with your assets.

	Your asset folder should have one or more subfolders for "templates", "styles", or "files"

	Run the following commands to download the binary and make it executable:
	
		curl -L -o upload_to_cos "http://designers.hubspot.com/cos-uploader/osx-latest/upload_to_cos"

		chmod 700 upload_to_cos

	Now you can run the upload watcher:

		./upload_to_cos

	To get all the options, run with the help flag:

		./upload_to_cos -h
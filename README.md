# Stable Diffusion WebUI Docker

1. Install docker on your machine
2. Clone this repo
3. `docker compose --profile download up --build` 
   1. This downloads the model files. Only need to do this once to prep the repo.
   2. This turns up the profile “download” and build the image and runs it. The --build flag tells Docker Compose to build any necessary images before starting the containers. The up command starts the containers in the foreground, which means that you can see their output in the console.
   3. Mapping of dir of host machine to inside the container is done in the yml file. So the downloaded files are downloaded inside the container and mapped to the /data dir. (these are model files)
4. `docker compose --profile auto up --build` 
   1. This builds and then run the image profile auto, which runs to A1111 webui.
   2. The first time it may take a while. Subsequent times should be within a minute.


## References

Visit the wiki for [Setup](https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup) and [Usage](https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Usage) instructions, checkout the [FAQ](https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/FAQ) page if you face any problems, or create a new issue!


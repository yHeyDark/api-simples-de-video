import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()
    
// set, map

    list(search) { 
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return{
                id,
                data,
            }
        })
        .filter(videos => {
            if (search) {
                return videos.title.includes(search)
            }
            
            return true
        })
    }

    create(video) { // uuid =- universal unique id
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id, video)
    }
}
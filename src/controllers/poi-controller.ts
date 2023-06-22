import { Poi, PrismaClient } from "@prisma/client"


class PoiController {
    async save(poi: Poi) {
        if (poi.id > 0) {
            return await this.update(poi);
        } else {
            return await this.insert(poi);
        }

    }

    async insert(poi: Poi) {
        const prisma = new PrismaClient();
        try {
            return prisma.poi.create({
                data: poi
            })
        } catch (e) {
            console.log("insert", e);
            throw e
        } finally {
            prisma.$disconnect();
        }
    }

    async update(poi: Poi) {
        const prisma = new PrismaClient();
        try {
            return prisma.poi.update({
                data: {
                    lat: poi.lat,
                    lng: poi.lng,
                    address: poi.address,
                    name: poi.name,
                    description: poi.description,
                },
                where: {
                    id: poi.id
                }
            })
        } catch (e) {
            console.log("update", e);
            throw e
        } finally {
            prisma.$disconnect();
        }

    }

    async fetch() {
        const prisma = new PrismaClient();
        try {
            return prisma.poi.findMany();

        } catch (e) {
            console.log("fetche", e);
            throw e
        } finally {
            prisma.$disconnect();
        }

    }
}



export default new PoiController();
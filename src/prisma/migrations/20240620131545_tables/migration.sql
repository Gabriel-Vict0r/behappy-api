-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orphanage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "acept_weekend" BOOLEAN NOT NULL,
    "acepted" BOOLEAN NOT NULL DEFAULT false,
    "id_location" INTEGER NOT NULL,

    CONSTRAINT "orphanage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "picture" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "id_orphanage" INTEGER NOT NULL,

    CONSTRAINT "picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hours" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "id_orphanage" INTEGER NOT NULL,

    CONSTRAINT "hours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "orphanage" ADD CONSTRAINT "orphanage_id_location_fkey" FOREIGN KEY ("id_location") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "picture" ADD CONSTRAINT "picture_id_orphanage_fkey" FOREIGN KEY ("id_orphanage") REFERENCES "orphanage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hours" ADD CONSTRAINT "hours_id_orphanage_fkey" FOREIGN KEY ("id_orphanage") REFERENCES "orphanage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "author" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "organizer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "reviewer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "teaser" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from" DATETIME NOT NULL,
    "to" DATETIME NOT NULL,
    "scheduleId" TEXT,
    CONSTRAINT "session_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "presenters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "special" TEXT NOT NULL,
    "sessionId" TEXT,
    CONSTRAINT "presenters_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "paper" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "presenter" TEXT NOT NULL,
    "reviewd" BOOLEAN NOT NULL,
    "affiliation" TEXT NOT NULL,
    "sessionId" TEXT,
    CONSTRAINT "paper_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "institutions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "evaluation" INTEGER NOT NULL,
    "contribution" INTEGER NOT NULL,
    "strength" TEXT NOT NULL,
    "weakness" TEXT NOT NULL,
    "paperId" TEXT NOT NULL,
    CONSTRAINT "review_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "paper" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "scheduleId" TEXT,
    CONSTRAINT "locations_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "available" BOOLEAN NOT NULL,
    "scheduleId" TEXT,
    CONSTRAINT "dates_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_authorTopaper" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_authorTopaper_A_fkey" FOREIGN KEY ("A") REFERENCES "author" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_authorTopaper_B_fkey" FOREIGN KEY ("B") REFERENCES "paper" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "paper_sessionId_key" ON "paper"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "review_paperId_key" ON "review"("paperId");

-- CreateIndex
CREATE UNIQUE INDEX "locations_scheduleId_key" ON "locations"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "dates_scheduleId_key" ON "dates"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "_authorTopaper_AB_unique" ON "_authorTopaper"("A", "B");

-- CreateIndex
CREATE INDEX "_authorTopaper_B_index" ON "_authorTopaper"("B");

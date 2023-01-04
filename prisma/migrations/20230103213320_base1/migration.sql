-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT,
    "clientUserId" TEXT,
    "name" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "createdAt" DATETIME,
    "userId" TEXT,
    CONSTRAINT "Bot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Bot" ("clientUserId", "createdAt", "id", "name", "plan", "token", "userId") SELECT "clientUserId", "createdAt", "id", "name", "plan", "token", "userId" FROM "Bot";
DROP TABLE "Bot";
ALTER TABLE "new_Bot" RENAME TO "Bot";
CREATE UNIQUE INDEX "Bot_id_key" ON "Bot"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

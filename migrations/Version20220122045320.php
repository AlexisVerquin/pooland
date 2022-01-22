<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220122045320 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('INSERT INTO language (name) value ("php"), ("python"), ("ruby"), ("go"), ("javascript"), ("java") ');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('delete from language WHERE name in ("php","python","ruby", "go", "javascript", ""java)');
    }
}

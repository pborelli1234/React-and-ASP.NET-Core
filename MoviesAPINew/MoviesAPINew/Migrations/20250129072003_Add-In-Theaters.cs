using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoviesAPINew.Migrations
{
    /// <inheritdoc />
    public partial class AddInTheaters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "InTheaters",
                table: "Movies",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InTheaters",
                table: "Movies");
        }
    }
}

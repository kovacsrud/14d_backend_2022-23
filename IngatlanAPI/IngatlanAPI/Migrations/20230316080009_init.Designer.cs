﻿// <auto-generated />
using System;
using IngatlanAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace IngatlanAPI.Migrations
{
    [DbContext(typeof(IngatlanContext))]
    [Migration("20230316080009_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.19")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("IngatlanAPI.Models.IngatlanModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<uint>("Ar")
                        .HasColumnType("int unsigned");

                    b.Property<DateTime>("HirdetesDatuma")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("KategoriaId")
                        .HasColumnType("int");

                    b.Property<string>("KepUrl")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Leiras")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<bool>("Tehermentes")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.HasIndex("KategoriaId");

                    b.ToTable("ingatlanok");
                });

            modelBuilder.Entity("IngatlanAPI.Models.KategoriaModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Nev")
                        .IsRequired()
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.HasIndex("Nev")
                        .IsUnique();

                    b.ToTable("kategoriak");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Nev = "Ház"
                        },
                        new
                        {
                            Id = 2,
                            Nev = "Lakás"
                        },
                        new
                        {
                            Id = 3,
                            Nev = "Építési telek"
                        },
                        new
                        {
                            Id = 4,
                            Nev = "Garázs"
                        },
                        new
                        {
                            Id = 5,
                            Nev = "Mezőgazdasági terület"
                        },
                        new
                        {
                            Id = 6,
                            Nev = "Ipari ingatlan"
                        });
                });

            modelBuilder.Entity("IngatlanAPI.Models.IngatlanModel", b =>
                {
                    b.HasOne("IngatlanAPI.Models.KategoriaModel", "Kategoria")
                        .WithMany()
                        .HasForeignKey("KategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

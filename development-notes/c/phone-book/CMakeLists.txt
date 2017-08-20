cmake_minimum_required(VERSION 3.6)
project(phone_book)

set(CMAKE_C_STANDARD 11)

set(SOURCE_FILES main.c service/factory.c)
add_executable(phone_book ${SOURCE_FILES})
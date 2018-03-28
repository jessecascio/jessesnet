cmake_minimum_required(VERSION 3.8)
project(pointer_magic)

set(CMAKE_C_STANDARD 99)

set(SOURCE_FILES main.c)
add_executable(pointer_magic ${SOURCE_FILES})
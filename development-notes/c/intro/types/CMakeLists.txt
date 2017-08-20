cmake_minimum_required(VERSION 3.6)
project(types)

set(CMAKE_C_STANDARD 11)

set(SOURCE_FILES main.c chars.c arrays.c)
add_executable(types ${SOURCE_FILES})
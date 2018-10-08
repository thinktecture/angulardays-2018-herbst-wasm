#include <string.h>
#include <emscripten/emscripten.h>

double EMSCRIPTEN_KEEPALIVE multiply(double a, double b)
{
    return a * b;
}

int main() {}
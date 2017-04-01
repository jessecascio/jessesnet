// addon.cc
#include <node.h>

namespace demo {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

long calc_fibi(int n);

void Fibi(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Check the number of arguments passed.
  if (args.Length() < 1) {
    // Throw an Error that is passed back to JavaScript
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  // Check the argument types
  if (!args[0]->IsNumber()) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong arguments")));
    return;
  }

  if (args[0]->NumberValue() <= 1) {
    Local<Number> num = Number::New(isolate, args[0]->NumberValue());
    args.GetReturnValue().Set(num);
    return;
  }
     
  // Perform the operation
  long value = calc_fibi(args[0]->NumberValue() - 1) + calc_fibi(args[0]->NumberValue() - 2);
  Local<Number> num = Number::New(isolate, value);

  args.GetReturnValue().Set(num);
}


long calc_fibi(int n) {
  
  if (n <= 1) {
    return n;
  }

  return calc_fibi(n - 1) + calc_fibi(n - 2);
}

void Init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "calc", Fibi);
}

NODE_MODULE(addon, Init)

}  // namespace demo
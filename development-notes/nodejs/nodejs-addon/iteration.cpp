#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  for (long i=0; i<5000000000; i++) { }
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "done"));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "iteration", Method);
}

NODE_MODULE(addon, init)

}  // namespace demo
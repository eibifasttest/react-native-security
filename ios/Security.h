
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSecuritySpec.h"

@interface Security : NSObject <NativeSecuritySpec>
#else
#import <React/RCTBridgeModule.h>

@interface Security : NSObject <RCTBridgeModule>
#endif

@end

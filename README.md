SockHydra
=========

## Overview

Simple server to help develop and test the SockCam application.  Acts as a socket.io hub which clients can connect to, then TAKE_PHOTO and PHOTO messages are broadcast to all other clients.

***NOTE: This is not representitive of what this service will eventually be like, at this stage it's purely for development and testing - therefore we have no requirements, spec, issues, etc.***

## Usage

1. Start the server:

```typescript
npm run start-dev
```

2. Connect SockCam.

3. Send a TAKE_PHOTO message:

```typescript
npm run start-test-sockcam
```
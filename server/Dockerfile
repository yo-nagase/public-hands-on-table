FROM golang:1.17-alpine as dev

WORKDIR /app
RUN apk update && apk add git

RUN go install golang.org/x/tools/cmd/goimports@latest \
    && go install golang.org/x/tools/gopls@latest \
    && go install golang.org/x/tools/cmd/godoc@latest \
    && go install golang.org/x/lint/golint@latest \
    && go install github.com/rogpeppe/godef@latest \
    && go install github.com/nsf/gocode@latest \
    # hot relord
    && go install github.com/cosmtrek/air@latest \
    # debug
    && go install github.com/go-delve/delve/cmd/dlv@latest

CMD ["air", "-c", ".air.toml"]
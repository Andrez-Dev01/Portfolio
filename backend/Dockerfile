FROM golang:1.22-alpine AS builder

WORKDIR /app
COPY go.mod ./
COPY . .
RUN go build -o /server ./cmd/server

FROM alpine:3.19
WORKDIR /app
COPY --from=builder /server /app/server
COPY internal/data/portfolio.json /app/internal/data/portfolio.json

ENV PORT=8080
EXPOSE 8080
CMD ["/app/server"]

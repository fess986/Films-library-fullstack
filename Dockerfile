FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN cd frontend && npm ci && npm run build
RUN npm ci
# RUN npm ci --omit=dev   - для продакшена не устанавливать ненужные дев-зависимости

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 4000

CMD ["npm", "start"]
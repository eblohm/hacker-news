const ConvertDate = epoch => {
  return new Date(epoch * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
};

export { ConvertDate };

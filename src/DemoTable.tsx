import { Container, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function DemoTable() {
    const [leaderboard, setLeaderboard] = useState<{ breed: string, votes: number }[]>([]);
    useEffect(() => {
        async function fetchAndStoreLeaderboard() {
            const response = await axios.get("https://dog-voting-db.onrender.com/leaderboard")
            setLeaderboard(response.data)
        }
        fetchAndStoreLeaderboard()
    }, []);
    return (
        <Container>

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Dog breed leaderboard!</TableCaption>
                    <Thead>
                        <HeaderFooterRows />

                    </Thead>
                    <Tbody>
                        {leaderboard.map(lbEntry => (
                            <Tr>
                                <Td>{lbEntry.breed}</Td>
                                <Td isNumeric>{lbEntry.votes}</Td>
                            </Tr>
                        )
                        )}


                    </Tbody>
                    <Tfoot>
                        <HeaderFooterRows />

                    </Tfoot>
                </Table>
            </TableContainer>
        </Container>
    )
}
function HeaderFooterRows() {
    return (
        <Tr>
            <Th>Breed</Th>
            <Th isNumeric>#votes</Th>
        </Tr>
    )
}